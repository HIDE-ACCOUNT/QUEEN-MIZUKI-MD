FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/MR-KALINDU/QUEEN-MIZUKI-MD.git /root/MR-KALINDU/
WORKDIR /root/MR-KALINDU/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
