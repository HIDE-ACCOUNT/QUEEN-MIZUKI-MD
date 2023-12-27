FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/HIDE-ACCOUNT/QUEEN-MIZUKI-MD /root/HIDE-ACCOUNT
WORKDIR /root/HIDE-ACCOUNT/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
