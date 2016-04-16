class Authentication {

    constructor(username, password) {
        this.postData = JSON.stringify({ 'UserName': username, 'Password': password });
        this.defer = $.Deferred();
        this.authUrl = 'http://pkh-dev-ektms02/tradingapi/session';
    }

    request() {

        $.ajax({
            url: this.authUrl,
            data: this.postData,
            datatype: "application/json",
            contentType: "application/json; charset=utf-8",
            type: 'POST',
            success: function (data, header) {
                _this.session = data.Session;
                _this.setSessionInLocalStorage(data);
                if (callback) { callback.onSuccess(data); }

            },
            error: function () {
                callback.onFailure();
            }
        });

       return defer.promise();
        
    }
}

