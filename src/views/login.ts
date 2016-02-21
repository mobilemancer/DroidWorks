export class login {

    private logIn() {
        var identity = new Kurve.Identity(
            "233b8b15-868c-4125-b954-e64ae7c8e3a8",
            "https://localhost:5043/login.html",
            Kurve.OAuthVersion.v2);

        identity.login(function(error) {
            if (!error) {
                //login worked
                alert("Log in worked");
                var x = identity;
            } else {
                var x = identity;
            }
        });
    }
}
