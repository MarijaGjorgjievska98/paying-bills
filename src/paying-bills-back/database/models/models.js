import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  `postgres://root:root@host.docker.internal:5432/bills`
);

export const User = sequelize.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING,
  },
  thumbnailUrl: {
    type: Sequelize.STRING,
  },
  lastLogIn:
  {
    type: Sequelize.DATE,
  },
});

export const Bill = sequelize.define('bill', {
  // attributes
  invoiceNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paid: {
    type: Sequelize.BOOLEAN,
    default: false,
  },
  paymentDeadline: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export const Operator = sequelize.define('operator', {
  // attributes
  logoUrl: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  regExForInvoce: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  regExForpaymentDeadline: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  regExForamount: {
    type: Sequelize.STRING,
    allowNull: false,
  },

});

User.hasMany(Bill);
Bill.belongsTo(User);

Operator.hasMany(Bill);
Bill.belongsTo(Operator);

User.belongsToMany(Operator, { through: 'UserOperators' });
Operator.belongsToMany(User, { through: 'UserOperators' });

sequelize.sync({ force: true }).then(async () => {
  //operators
  const operatorA1 = await Operator.create({
    logoUrl: 'https://www.a1.mk/o/A1-theme/images/logo@2x.png',
    name: 'A1',
    email: 'm.gorgi47@gmail.com',
    regExForInvoce : '(?<=Број\s+на\s+фактура:\s+)\d{1,}',
    regExForpaymentDeadline: '(?<=Рок\s+на\s+плаќање:\s+)\d{2}\.\d{2}\.\d{4}',
    regExForamount: '/(\d{1,3}\.)*(\d{1,3}),\d{2}(?=\s+ден\.)/g ',
  });
  const operatornEVN = await Operator.create({
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Logo_EVN.svg/2560px-Logo_EVN.svg.png',
    name: 'EVN',
    email: 'm.gorgi47@gmail.com',
    regExForInvoce : '/(?<=фактура\s+за\s+електрична\s+енергија\s+)([^\s]+)/g',
    regExForpaymentDeadline: '/(?<=рок\s+на\s+плаќање\s+до\s+)\d{2}\.\d{2}\.\d{4}/g',
    regExForamount: '/\d{1,}\.\d{2}(?=\s+денари)/g',
  });
  const operatorVodovod = await Operator.create({
    logoUrl: 'https://play-lh.googleusercontent.com/xj3UnJhAUtb5UhTZeY-pO3KLpiT0K2Bkb_L-xrLb72hCBeVqQ-AgtPFULyqnUBnamg',
    name: 'Водовод',
    email: 'm.gorgi47@gmail.com',
    regExForInvoce : '/ ((?<=број\s+)\d{1,})(?=\s+и\s+рок)/g',
    regExForpaymentDeadline: '/(?<=рок\s+на\s+плаќање\s+)\d{2}\.\d{2}\.\d{4}/g',
    regExForamount: '/ \d{1,}\.\d{2}(?=\s+денари\.)/g',
  });

  // bills
  const bill1 = await Bill.create({
    invoiceNumber: '106489487109',
    paid: false,
    paymentDeadline: '2023-06-20',
    amount: 761,
    operatorId: operatorA1.id
  });

  const bill2 = await Bill.create({
    invoiceNumber: '95016013012646',
    paid: false,
    paymentDeadline: '2023-09-20',
    amount: 1143,
    operatorId: operatorVodovod.id
  });

  // const bill3 = await Bill.create({
  //   invoiceNumber: '87564',
  //   paid: false,
  //   paymentDeadline: '2023-09-15',
  //   amount: 1450,
  //   operatorId: operatorA1.id,
  // });
  const bill4 = await Bill.create({
    invoiceNumber: '106677985366',
    paid: false,
    paymentDeadline: '2023-09-19',
    amount: 699,
    operatorId: operatorA1.id,
  });

  // users
  const user = await User.create({
    firstName: 'Marija',
    lastName: 'Gjorgjievska',
    email: 'm.gorgi47@gmail.com',
    thumbnailUrl:
      '',
    phone: '',
  });
  // user.addOperators([operatorA1, operatornEVN, operatorVodovod]);
  user.addBills([bill1, bill2, bill4]);

  const user1 = await User.create({
    firstName: 'Marija',
    lastName: 'Gjorgjievska',
    email: 'm.gjorgjievska@yahoo.com',
    thumbnailUrl:
      'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
    phone: '078-441-442',
  });

});



export default sequelize;
