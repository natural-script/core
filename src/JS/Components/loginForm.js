/*!
 * Login Form
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2017-09-11
 */
$(function () {
    $.fn[window.loginFormTranslations[document.langID]] = function (options) {
        // Establish our default settings
        var settings = $.extend({}, options);
        return this.each(function () {
            $('body').append('<div id="firebaseui-container"></div>');

            function getRecaptchaMode() {
                // Quick way of checking query params in the fragment. If we add more config
                // we might want to actually parse the fragment as a query string.
                return location.hash.indexOf('recaptcha=invisible') !== -1 ? 'invisible' : 'normal';
            }

            function getUiConfig() {
                return {
                    'callbacks': {
                        // Called when the user has been successfully signed in.
                        'signInSuccess': function (user, credential, redirectUrl) {
                            handleSignedInUser(user);
                            // Do not redirect.
                            return false;
                        }
                    },
                    // Opens IDP Providers sign-in flow in a popup.
                    'signInFlow': 'popup',
                    'signInOptions': [
                        // TODO(developer): Remove the providers you don't need for your app.
                        {
                            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                            scopes: ['https://www.googleapis.com/auth/plus.login']
                        }, {
                            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                            scopes: ['public_profile', 'email', 'user_likes', 'user_friends']
                        },
                        firebase.auth.TwitterAuthProvider.PROVIDER_ID, {
                            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                            recaptchaParameters: {
                                size: getRecaptchaMode()
                            }
                        }
                    ],
                    // Terms of service url.
                    'tosUrl': 'https://www.google.com'
                };
            }
            // Initialize the FirebaseUI Widget using Firebase.
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            /**
             * @return {string} The URL of the FirebaseUI standalone widget.
             */
            function getWidgetUrl() {
                return '/widget#recaptcha=' + getRecaptchaMode();
            }
            /**
             * Redirects to the FirebaseUI widget.
             */
            var signInWithRedirect = function () {
                window.location.assign(getWidgetUrl());
            };
            /**
             * Open a popup with the FirebaseUI widget.
             */
            var signInWithPopup = function () {
                window.open(getWidgetUrl(), 'Sign In', 'width=985,height=735');
            };
            /**
             * Displays the UI for a signed in user.
             * @param {!firebase.User} user
             */
            var handleSignedInUser = function (user) {
                window.user = user;
                console.log(user.uid);
                window.displayName = user.displayName;
                window.email = user.email;
                window.phoneNumber = user.phoneNumber;
                if (user.photoURL) {
                    window.profilePhoto = user.photoURL;
                }
            };
            /**
             * Displays the UI for a signed out user.
             */
            var handleSignedOutUser = function () {
                ui.start('#firebaseui-container', getUiConfig());
                $('contents').hide();
            };
            // Listen to change in auth state so it displays the correct UI for when
            // the user is signed in or not.
            firebase.auth().onAuthStateChanged(function (user) {
                user ? handleSignedInUser(user) : handleSignedOutUser();
            });
            /**
             * Deletes the user's account.
             */
            var deleteAccount = function () {
                firebase.auth().currentUser.delete().catch(function (error) {
                    if (error.code == 'auth/requires-recent-login') {
                        // The user's credential is too old. She needs to sign in again.
                        firebase.auth().signOut().then(function () {
                            // The timeout allows the message to be displayed after the UI has
                            // changed to the signed out state.
                            setTimeout(function () {
                                alert('Please sign in again to delete your account.');
                            }, 1);
                        });
                    }
                });
            };
            /**
             * Handles when the user changes the reCAPTCHA config.
             */
            function handleRecaptchaConfigChange() {
                var newRecaptchaValue = document.querySelector('input[name="recaptcha"]:checked').value;
                location.replace(location.pathname + '#recaptcha=' + newRecaptchaValue);
                // Reset the inline widget so the config changes are reflected.
                ui.reset();
                ui.start('#firebaseui-container', getUiConfig());
            }
        });
    };
});