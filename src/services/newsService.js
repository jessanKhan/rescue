export default class NewsDataSeervice {
  // async getAnalyticDataEN() {
  //     const token = "pd7a4m4541i3lk09p82y096s";
  //     const data = fetch('https://api.mt5.com/get-analytics-by-filter?_format=json&type=12&limit=15&offset=0&_lang=en', {
  //         method: "post",
  //         headers: new Headers({
  //             Authorization: "Bearer " + token,
  //             "Content-Type": "application/x-www-form-urlencoded"
  //         })
  //     })
  //         .then(resp => resp.json())
  //         .then(data => data.result) //GET ITEMS ARRAY
  //     return data
  // }

  async getNews() {
    const data = await fetch(
      'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk&num=100',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'e12a5a04bdmsh801602a2fec5deap188614jsn504230678235',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        },
      },
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(data);
  }

  async getAnalyticDataEN() {
    const apiKeynewsApi = '40f074db59354f7a8bcacf878bdae154';
    const apiKey = 'yo4VyQrTlXiNHQ0nXP-Yy45ggSg67bIDUoOvBqfK';
    const data = await fetch(
      `https://api.predicthq.com/v1/events/?category=disasters%2Csevere-weather&limit=40&offset=0`,
      {
        method: 'post',
        headers: new Headers({
          Authorization: 'Bearer ' + apiKey,
          Accept: 'application/json',
        }),
      },
    );
    let returnData = await data.json();
    console.log('JJJJJJJPP', returnData);
    // let dataList = {}
    // let mainResultData = returnData.result;
    // for (let i = mainResultData.length; i>0; i--){
    //     console.log("JJJJJJJFFF", mainResultData[i])
    // }

    // let reverseData = Object.entries(returnData.result);
    // reverseData = reverseData.reverse();
    // reverseData = { ...reverseData }
    // console.log("JJJJJJJ", reverseData)
    // return reverseData;
    return returnData.result;
  }
}
