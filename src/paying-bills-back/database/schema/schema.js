import db from '../models/models';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt
} from 'graphql';
import {User as UserModel} from '../models/models';
import {Bill as BillModel} from '../models/models';
import {Operator as OperatorModel} from '../models/models';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'this represents a user',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        resolve(user) {
          return user.id;
        },
      },
      firstName: {
        type: GraphQLString,
        resolve(user) {
          return user.firstName;
        },
      },
      lastName: {
        type: GraphQLString,
        resolve(user) {
          return user.lastName;
        },
      },
      email: {
        type: GraphQLNonNull(GraphQLString),
        resolve(user) {
          return user.email;
        },
      },
      phone: {
        type: GraphQLString,
        resolve(user) {
          return user.phone;
        },
      },
      thumbnailUrl: {
        type: GraphQLString,
        resolve(user) {
          return user.thumbnailUrl;
        },
      },
      bills:
      {
        type: new GraphQLList(BillType),
        resolve(user) {
          return user.bills;
        },
      },
      operators:
      {
        type: new GraphQLList(OperatorType),
        resolve(user) {
          return user.operators;
        },
      },
    };
  },
});

const BillType = new GraphQLObjectType({
  name: 'Bill',
  description: 'this represents a bill',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        resolve(bill) {
          return bill.id;
        },
      },
      invoiceNumber: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(bill) {
          return bill.invoiceNumber;
        },
      },
      paid: {
        type: GraphQLNonNull(GraphQLBoolean),
        resolve(bill) {
          return bill.paid;
        },
      },
      paymentDeadline: {
        type:  GraphQLNonNull(GraphQLString),
        resolve(bill) {
          return bill.paymentDeadline;
        },
      },
      amount: {
        type: GraphQLNonNull(GraphQLInt),
        resolve(bill) {
          return bill.amount;
        },
      },
      operator: {
        type: OperatorType,
        resolve(bill) {
          return bill.operator;
        },
      },
    };
  },
});

const OperatorType = new GraphQLObjectType({
  name: 'Operator',
  description: 'this represents an operator',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        resolve(operator) {
          return operator.id;
        },
      },
      logoUrl: {
        type: GraphQLString,
        resolve(operator) {
          return operator.logoUrl;
        },
      },
      name: {
        type: GraphQLNonNull(GraphQLString),
        resolve(operator) {
          return operator.name;
        },
      },
      email: {
        type:  GraphQLNonNull(GraphQLString),
        resolve(operator) {
          return operator.email;
        },
      },
      regExForInvoce: {
        type: GraphQLNonNull(GraphQLString),
        resolve(operator) {
          return operator.regExForInvoce;
        },
      },
      regExForpaymentDeadline: {
        type: GraphQLNonNull(GraphQLString),
        resolve(operator) {
          return operator.regExForpaymentDeadline;
        },
      },
      regExForamount: {
        type: GraphQLNonNull(GraphQLString),
        resolve(operator) {
          return operator.regExForamount;
        },
      },
    };
  },
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      //validations can go here
      resolve(root, args) {
        return db.models.user.findOne({ where: args, include: { model: OperatorModel } });
      },
    },
    userByEmail: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
      },
      //validations can go here
      resolve(root, args) {
        return db.models.user.findOne({ where: args, include: { model: OperatorModel } });
      },
    },
    usersEmails: {
      type: new GraphQLList(UserType),
      //validations can go here
      resolve(root, args) {


        return db.models.user.findAll();
      },
    },
    bills: {
      type: new GraphQLList(BillType),
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        paid: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      //validations can go here
      resolve(root, args) {
        let sortDirection = 'ASC';
        if (args.paid) {
          sortDirection = 'DESC';
        }

        return db.models.bill.findAll({ where: {userId: args.userId, paid: args.paid}, order: [['paymentDeadline', sortDirection]], include: { model: OperatorModel } });
      },
    },
    operators: {
      type: new GraphQLList(OperatorType),
      resolve()
      {
        return db.models.user.findAll();
      }
    }
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Functions to create things',
  fields: () => {
    return {
      addUser: {
        type: UserType,
        args: {
          email: {
            type:  GraphQLString,
          },
        },
        resolve(_, args) {
          return UserModel.create({
            email: args.email,
          });
        },
      },
      editUser: {
        type: UserType,
        args: {
          id: { 
            type: new GraphQLNonNull(GraphQLID) 
          },
          firstName: {
            type: new GraphQLNonNull(GraphQLString),
          },
          lastName: {
            type: GraphQLString,
          },
          email: {
            type: GraphQLNonNull(GraphQLString),
          },
          phone: {
            type: GraphQLString,
          },
          thumbnailUrl: {
            type: GraphQLString,
          },
          operators:
          {
            type: new GraphQLList(GraphQLID),
          },
        },
        async resolve(_, args) {
          try {
            const result = await UserModel.update(
              { 
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                phone: args.phone,
                thumbnailUrl: args.thumbnailUrl,
              },
              { where: { id: args.id } }
            );

            if (result) {
              const user = await db.models.user.findOne({ where: {id: args.id} });
              if (!user) {
                throw new Error('User not found');
              }

              await user.setOperators(args.operators);

              return user;
            }
          } catch (err) {
            console.log(err)
          }
        },
      },
      // updateLastLogIn: {
      //   type: UserType,
      //   args: {
      //     lastLogIn: {
      //       type:  Sequelize.DATE,
      //     },
      //   },
      //   resolve(_, args) {
      //     return UserModel.create({
      //       lastLogIn: args.lastLogIn,
      //     });
      //   },
      // },
      payBill: {
        type: BillType,
        args: {
          id: { 
            type: new GraphQLNonNull(GraphQLID) 
          },
        },
        async resolve(_, args) {
          try {
            const result = await BillModel.update(
              { 
                paid: true,
              },
              { where: { id: args.id } }
            );

            if (result) {
              return await db.models.bill.findOne({ where: {id: args.id} });  
            }
          } catch (err) {
            console.log(err)
          }
        },
      },
      deleteBill: {
        type: BillType,
        args: {
          id: { 
            type: new GraphQLNonNull(GraphQLID) 
          },
        },
        async resolve(_, args) {
          try {
            await BillModel.destroy({
              where: {
                id: args.id
              }
            });

            return {id: args.id};
          } catch (err) {
            console.log(err)
          }
        },
      },
    };
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
