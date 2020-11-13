#ng build --prod

cd ./dist
scp ./* tony@jiaweitang.com:~/projekt-studium-admin-portal

ssh -t tony@jiaweitang.com << EOF
    sudo rm -rf /var/www/html/*
    sudo mv ~/projekt-studium-admin-portal/* /var/www/html
    sudo systemctl restart httpd
    rm -rf ~/projekt-studium-admin-portal/*
EOF

echo "done!"