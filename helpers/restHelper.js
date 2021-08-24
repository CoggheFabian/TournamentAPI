function getUrl(request){
    return `http://${request.get('host')}`;
}

function getQuizMainEndPoint(endpoint, request){
    let url = getUrl(request);
    return `${url}/api/quizzes/${endpoint}`
}

module.exports = {
    getQuizMainEndPoint : getQuizMainEndPoint
}
