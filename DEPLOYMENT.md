# Deploying to Contabo Server

This document provides instructions on how to set up the GitHub Actions workflow for deploying the Patro Patri landing page to a Contabo server.

## Prerequisites

1. A Contabo VPS with SSH access
2. Node.js and npm installed on the server
3. PM2 process manager installed on the server
4. A GitHub repository for the project

## Server Setup

1. Connect to your Contabo server via SSH:
   ```
   ssh root@178.18.251.219
   ```

2. Create a directory for the application:
   ```
   mkdir -p ~/patro-patri-landing
   ```

3. Install Node.js and npm if not already installed:
   ```
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. Install PM2 globally:
   ```
   npm install -g pm2
   ```

5. Set up PM2 to start on boot:
   ```
   pm2 startup
   ```
   Follow the instructions provided by the command.

## GitHub Secrets Setup

You need to add the following secrets to your GitHub repository:

1. `SSH_PRIVATE_KEY`: Your private SSH key for connecting to the Contabo server
2. `SSH_KNOWN_HOSTS`: The SSH known hosts entry for your Contabo server
3. `SSH_USER`: Your username on the Contabo server
4. `SSH_HOST`: The IP address or hostname of your Contabo server

### How to Generate These Secrets

#### SSH_PRIVATE_KEY

This is your private SSH key. If you don't have an SSH key pair, you can generate one:

```
ssh-keygen -t rsa -b 4096 -C "hrasel2002@gmail.com"
```

Then copy the contents of the private key file (usually `~/.ssh/id_rsa`):

```
cat ~/.ssh/id_rsa
```

Add this as the `SSH_PRIVATE_KEY` secret in your GitHub repository.

#### SSH_KNOWN_HOSTS

To get the known hosts entry for your server:

```
ssh-keyscan -H 178.18.251.219
```

Add the output as the `SSH_KNOWN_HOSTS` secret.

#### SSH_USER and SSH_HOST

These are simply your username and the IP address or hostname of your Contabo server.

## Adding Secrets to GitHub

1. Go to your GitHub repository
2. Click on "Settings"
3. Click on "Secrets and variables" > "Actions"
4. Click on "New repository secret"
5. Add each of the secrets mentioned above

## Configuring Nginx (Optional)

If you want to serve your Next.js application behind Nginx, you can set up a reverse proxy:

1. Install Nginx:
   ```
   sudo apt-get install nginx
   ```

2. Create a new Nginx configuration file:
   ```
   sudo nano /etc/nginx/sites-available/patro-patri-landing
   ```

3. Add the following configuration:
   ```
   server {
       listen 80;
       server_name patropatri.online www.patropatri.online;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. Create a symbolic link to enable the site:
   ```
   sudo ln -s /etc/nginx/sites-available/patro-patri-landing /etc/nginx/sites-enabled/
   ```

5. Test the Nginx configuration:
   ```
   sudo nginx -t
   ```

6. Restart Nginx:
   ```
   sudo systemctl restart nginx
   ```

## SSL Configuration (Optional)

To secure your site with SSL using Let's Encrypt:

1. Install Certbot:
   ```
   sudo apt-get install certbot python3-certbot-nginx
   ```

2. Obtain an SSL certificate:
   ```
   sudo certbot --nginx -d patropatri.online -d www.patropatri.online
   ```

3. Follow the prompts to complete the setup.

## Troubleshooting

If you encounter issues with the deployment:

1. Check the GitHub Actions logs for any errors
2. Check the PM2 logs on the server:
   ```
   pm2 logs patro-patri-landing
   ```
3. Check the Nginx error logs:
   ```
   sudo tail -f /var/log/nginx/error.log
   ```
