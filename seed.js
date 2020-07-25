/* eslint-disable no-console */
const bcrypt = require('bcryptjs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const Admins = require('./models/AdminLogin');

const seedAdmin = async () => {
  const logInit = chalk.yellow('[!] Initializing super Admin...!');
  const adminExist = chalk.blue('[👌] super admin exist');
  const adminCreated = chalk.green('[✅] super admin created');
  console.log(logInit);
  await Admins.findOne({ email: 'admin@example.com' }).then(
    (admin) => {
      if (admin) {
        console.log(adminExist);
      } else {
        inquirer
          .prompt([
            {
              type: 'password',
              name: 'password',
              message: 'password',
              mask: '*'
            },
            {
              name: 'email',
              message: 'email (default: admin@example.com)',
              default: 'admin@example.com'
            },
            {
              name: 'name',
              message: 'John Doe (default: John Doe)',
              default: 'John Doe'
            }
          ])
          .then(async (ans) => {
            await Admins.findOne({ email: ans.email }).then(
              (newAadmin) => {
                if (newAadmin) {
                  console.log(adminExist);
                } else {
                  bcrypt.hash(ans.password, 10).then((hash) => {
                    const ad = new Admins({
                      name: ans.name,
                      password: hash,
                      email: ans.email,
                      role: 'superAdmin'
                    });
                    ad.save().then(
                      () => { console.log(adminCreated); }
                    ).catch((error) => { console.log(error); });
                  });
                }
              }
            ).catch((err) => { console.log(chalk.red(err)); });
          });
      }
    }
  ).catch((err) => { console.log(chalk.red(err)); });
};

module.exports.seedAdmin = seedAdmin;
