const route= require('express').Router();

const service= require('../services/service-requests.service');

route.get('/',service.getRequests);
route.post('/',service.insertRequest);
route.put('/:id',service.updateRequest);
route.delete('/:id',service.deleteRequest);

module.exports= route;