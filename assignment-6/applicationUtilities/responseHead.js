const respHandler = (res, receivedResponseObject) => {
  res.status(receivedResponseObject.statusCode).send( { 
    error : receivedResponseObject.error, 
    message:receivedResponseObject.message, 
    infoReceived : receivedResponseObject.info,
  })
  res.end();
}

module.exports = {
  respHandler
}
