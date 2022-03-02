const cityModel = require('../models/city');
const usersCtrl = {};

usersCtrl.getCitys = async (req, res)=>{
    /* se obtienen los paramentros enviados en la ruta */
    let filters = req.query?req.query:{};
    var filtersReal = [];

    for(filtro in filters){
        /* recoremos los filtros para agregarles un regex y nos muestre datos similares */
        if(filtro == 'q'){
            filtersReal.push({name: {$regex: filters[filtro], $options:'i'}});
        }else{
            var f = {};
            f[filtro]= {$regex: filters[filtro], $options:'i'}
            filtersReal.push(f);
        }
    }

    /* consulta al modelo ../model/city.js con mongoose */
    cityModel.find({$or:filtersReal},(err, items) => {
        if(err){
            /* si marca error la consula se manda un status 500 y el error */
            return res.status(500).json({search: []});
        }

        var data = [];
        /* enviamos solo la informacion necesaria */
        items.forEach(element => {
            let model = {
                "name":element.name,
                "latitude": element.latitude,
                "longitude": element.longitude,
                "score": 0 /* este campo no entendi muy bien donde obtenerlo y dentro de la data no estaba */
            };

            data.push(model);
        });

        return res.status(200).json({search: data});
    });
};

module.exports = usersCtrl;