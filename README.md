## Development

1. Clone the Repository and change directory

```
git clone https://github.com/nguyenhv01012000/OnlineShoppingWebsite

```

2. Install the dependencies.

```
npm install
```

3. Run app locally.

```
npm start
```

4. Deploy.

```
docker build -t shop-backend .
docker container run -p 4000:4000  shop-backend  

```
docker build -t shop-frontend .
docker  run -i -t -p 3000:3000  shop-frontend   
```

## Shalom!
