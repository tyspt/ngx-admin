ng build --prod

cd ./dist
tar -cvzf projekt-studium-admin-portal.tar.gz ./

scp ./*.tar.gz tony@jiaweitang.com:~

ssh -t tony@jiaweitang.com << EOF
    rm -rf ./projekt-studium-admin-portal
    mkdir ./projekt-studium-admin-portal
    tar -xvzf *.tar.gz -C ./projekt-studium-admin-portal
    sudo rm -rf /var/www/html/*
    sudo mv ./projekt-studium-admin-portal/* /var/www/html
EOF

rm -rf ./*.tar.gz

read -p "done!"