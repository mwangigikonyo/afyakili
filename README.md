# afyakili
A SaaS Teletherapy Application for the African Market (Afya - Health, Akili - Mental = Mental Health)
This SaaS helps serve various mental health providers.
The providers can be;
- Government institutions
- Private hospitals
- Social Groups (E.g Rafiki)


# How to run
After cloning this repository, open the command prompt and navigate
into this directory then;


    `npm install sails -g`
    `npm install`
    `sails lift`

Access the application from 

    `http://localhost:1337`

# How to use pm2 to run in production

1. Install pm2

    `npm install pm2 -g`

2.  Navigate to this repository from command prompt and run;


    `NODE_ENV=production pm2 start app.js -x -- --prod`




