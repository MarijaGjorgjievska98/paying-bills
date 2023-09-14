import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  `postgres://root:root@host.docker.internal:5432/bills`
);

export const User = sequelize.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
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
  });
  const operatornEVN = await Operator.create({
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Logo_EVN.svg/2560px-Logo_EVN.svg.png',
    name: 'EVN',
    email: 'm.gorgi47@gmail.com',
  });
  const operatorVodovod = await Operator.create({
    logoUrl: 'https://play-lh.googleusercontent.com/xj3UnJhAUtb5UhTZeY-pO3KLpiT0K2Bkb_L-xrLb72hCBeVqQ-AgtPFULyqnUBnamg',
    name: 'Водовод',
    email: 'm.gorgi47@gmail.com',
  });

  // bills
  const bill1 = await Bill.create({
    invoiceNumber: '12345',
    paid: true,
    paymentDeadline: '2023-10-15',
    amount: 1500,
    operatorId: operatorA1.id
  });

  const bill2 = await Bill.create({
    invoiceNumber: '54643',
    paid: false,
    paymentDeadline: '2023-10-23',
    amount: 567,
    operatorId: operatornEVN.id
  });

  const bill3 = await Bill.create({
    invoiceNumber: '87564',
    paid: true,
    paymentDeadline: '2023-09-15',
    amount: 1450,
    operatorId: operatorA1.id,
  });

  // users
  const user = await User.create({
    firstName: 'Marija',
    lastName: 'Gjorgjievska',
    email: 'm.gorgi47@gmail.com',
    thumbnailUrl:
      'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
    phone: '078-441-442',
  });
  user.addOperators([operatorA1, operatornEVN, operatorVodovod]);
  user.addBills([bill1, bill2, bill3]);
});

export default sequelize;
