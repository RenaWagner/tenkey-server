"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "publicstyles",
      [
        {
          imageUrl:
            "https://onpointfresh.com/wp-content/uploads/2016/10/d326c9c248e446b7bb52a01df048182e.jpg",
          minTemp: 0,
          maxTemp: 0,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.pinimg.com/originals/41/7f/ff/417fff9fe20c90fd4ba9686ca8b06659.jpg",
          minTemp: 0,
          maxTemp: 0,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://image.space.rakuten.co.jp/d/strg/ctrl/9/38e0bce4384f63eaf0beee0b6748c76dcc86cd27.38.2.9.2.jpeg",
          minTemp: 0,
          maxTemp: 0,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://onpointfresh.com/wp-content/uploads/2016/10/74bd3ebb362cef671bebdca5d49cf384.jpg",
          minTemp: 0,
          maxTemp: 5,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.pinimg.com/originals/5f/d5/ed/5fd5ed4848548ad437e1ed885b488cd1.jpg",
          minTemp: 0,
          maxTemp: 5,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://onpointfresh.com/wp-content/uploads/2016/10/6b49a9599f06fb90575ad7a4665c440f.jpg",
          minTemp: 5,
          maxTemp: 10,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://onpointfresh.com/wp-content/uploads/2016/10/6cfafe66259ce80b87db901fbd116cf3.jpg",
          minTemp: 5,
          maxTemp: 10,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://www.styledbysally.com.au/wp-content/uploads/2017/07/large_61aa0072-ac6e-433d-99e7-435f7a421378.jpeg",
          minTemp: 5,
          maxTemp: 10,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0162/2116/files/Dapper_Winter_Outfits_For_Men_4.jpg?v=1545285805",
          minTemp: 5,
          maxTemp: 10,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://www.instaloverz.com/wp-content/uploads/2016/08/8-autumn-street-fashion-men-1-717x1024.jpg",
          minTemp: 10,
          maxTemp: 15,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://thefashiontag.files.wordpress.com/2013/09/leather-jacket-men-street-style-autumn.jpg",
          minTemp: 10,
          maxTemp: 15,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://thefashiontag.files.wordpress.com/2013/09/autumn-streetstyle-men-bomber-jacket.jpg",
          minTemp: 10,
          maxTemp: 15,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.styleoholic.com/2016/02/trendy-spring-2016-casual-outfits-for-men-9.jpg",
          minTemp: 15,
          maxTemp: 20,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://www.instaloverz.com/wp-content/uploads/2016/08/20-autumn-street-fashion-men-1.jpg",
          minTemp: 15,
          maxTemp: 20,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://thefashiontag.files.wordpress.com/2013/09/men-streetstyle-military-look.jpg",
          minTemp: 15,
          maxTemp: 20,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0162/2116/files/Dapper_Winter_Outfits_For_Men_3.jpg?v=1545285804",
          minTemp: 15,
          maxTemp: 20,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.styleoholic.com/2016/02/trendy-spring-2016-casual-outfits-for-men-28.jpg",
          minTemp: 20,
          maxTemp: 25,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://www.stylesofman.com/wp-content/uploads/2019/06/LtmsPAK-676x1024.jpg?ezimgfmt=ng:webp/ngcb87",
          minTemp: 20,
          maxTemp: 25,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://nextluxury.com/wp-content/uploads/mens-chic-summer-outfits-style-designs.jpg",
          minTemp: 20,
          maxTemp: 25,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://nextluxury.com/wp-content/uploads/guy-summer-outfits-style.jpg",
          minTemp: 25,
          maxTemp: 30,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://tasclap.k-img.com/icv/450/tasclapimage_1815_93_1.jpg?d=20190705143343",
          minTemp: 25,
          maxTemp: 30,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://nextluxury.com/wp-content/uploads/excellent-summer-outfits-styles-for-men-with-red-shorts-and-scarf.jpg",
          minTemp: 25,
          maxTemp: 30,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://nextluxury.com/wp-content/uploads/guys-summer-outfits-style-designs.jpg",
          minTemp: 25,
          maxTemp: 30,
          clothingType: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://aritzia.scene7.com/is/image/Aritzia/zoom/f20_03_a05_74361_1274_on_a.jpg",
          minTemp: 0,
          maxTemp: 0,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://oliviajeanette.com/wp-content/uploads/2018/01/IMG_2484.jpg",
          minTemp: 0,
          maxTemp: 0,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.pinimg.com/564x/95/11/6c/95116c5a295f2210b092bf8e228d47e8.jpg",
          minTemp: 0,
          maxTemp: 0,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://www.the36thavenue.com/wp-content/uploads/2016/10/fashion-16.jpg",
          minTemp: 0,
          maxTemp: 0,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://www.the36thavenue.com/wp-content/uploads/2016/10/fashion-14-391x1000.jpg",
          minTemp: 0,
          maxTemp: 5,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://s-media-cache-ak0.pinimg.com/736x/28/13/ae/2813aeb1cd7c11ce5996d534d4f28fd2.jpg",
          minTemp: 0,
          maxTemp: 5,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://i7.wimg.jp/coordinate/3jq586/20140102172952408/20140102172952408_500.jpg",
          minTemp: 0,
          maxTemp: 5,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://lamire.jp/wp-content/uploads/2018/01/04112737/20170117172952712_500.jpg",
          minTemp: 0,
          maxTemp: 5,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.pinimg.com/originals/3e/14/b8/3e14b8b1eeaab5f25e6d30a1964a9f25.jpg",
          minTemp: 5,
          maxTemp: 10,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://stylecaster.com/wp-content/uploads/2016/10/tumblr_o3hdu1vbfa1qkv30do1_1280.jpg?w=830",
          minTemp: 5,
          maxTemp: 10,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://stylecaster.com/wp-content/uploads/2016/10/tumblr_o8ezz6gcep1qhqecbo1_500.jpg?w=830",
          minTemp: 5,
          maxTemp: 10,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.pinimg.com/736x/db/bb/60/dbbb600e9a5a7edfa472c0a97301c6bb.jpg",
          minTemp: 10,
          maxTemp: 15,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.pinimg.com/originals/1e/a8/9a/1ea89a93c3b467fa54bee43ec95011e3.png",
          minTemp: 10,
          maxTemp: 15,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.pinimg.com/originals/e1/40/9f/e1409f56c44839fe4bcab7e088fda024.jpg",
          minTemp: 10,
          maxTemp: 15,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://img.classy-online.jp/wp-content/uploads/2020/03/01130729/DMA-190201CL_0560.png",
          minTemp: 15,
          maxTemp: 20,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://fashiongum.com/wp-content/uploads/2015/10/Winter-Street-Style-Trends-5-700x798.jpg",
          minTemp: 15,
          maxTemp: 20,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://fashiongum.com/wp-content/uploads/2015/10/Winter-Street-Style-Trends-2-700x1050.jpg",
          minTemp: 15,
          maxTemp: 20,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://fashiongum.com/wp-content/uploads/2015/10/Winter-Street-Style-Trends-8.jpg",
          minTemp: 15,
          maxTemp: 20,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i.pinimg.com/originals/be/ab/af/beabafae509b75e5ac8e771c85ccb182.jpg",
          minTemp: 20,
          maxTemp: 25,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://i2.wp.com/visual-therapy.com/blog/wp-content/uploads/2017/06/46c2c5b09f72f62d27b8a9ddd9068bd3.jpg?resize=800%2C1200",
          minTemp: 20,
          maxTemp: 25,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://img.classy-online.jp/wp-content/uploads/2020/02/24232419/DMA-_DSC-0118-4-2-683x1024-683x1024.jpg",
          minTemp: 20,
          maxTemp: 25,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://cdn.wimg.jp/coordinate/uksfty/20170909123523346/20170909123523346_500.jpg",
          minTemp: 20,
          maxTemp: 25,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://fashiongum.com/wp-content/uploads/2015/09/Model-Summer-Street-Style-Looks-8-700x1057.jpg",
          minTemp: 25,
          maxTemp: 30,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590785094-screen-shot-2020-05-29-at-4-44-27-pm-1590785078.png",
          minTemp: 25,
          maxTemp: 30,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://fashiongum.com/wp-content/uploads/2015/09/Model-Summer-Street-Style-Looks-1-700x1057.jpg",
          minTemp: 25,
          maxTemp: 30,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://fashiongum.com/wp-content/uploads/2015/09/Model-Summer-Street-Style-Looks-12-700x1057.jpg",
          minTemp: 25,
          maxTemp: 30,
          clothingType: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("publicstyles", null, {});
  },
};
