import request from 'request';

module.exports = {
  index: (req,res)=> {
    let params = req.allParams();
    console.log('params', params);

    let url = `https://us1.supership.club/notification/tracking`
    request.post({
      url, form: params
    },(error, response, body)=>{
      console.log(body);
    });

    // res.statusCode = 200;
    res.set({
      'Content-Type': 'application/json',
      'accept': '*/*'
    })
    res.ok({result:'success'})
  },
};
