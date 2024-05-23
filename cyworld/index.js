const menuHome = () => {
  document.getElementById('contentFrame').setAttribute('src', 'home.html');
  document.getElementById('menuHome').style = "color: #000; background-color: #FFF;";
  document.getElementById('menuJukebox').style = "color: #FFF; background-color: #298EB5;";
  document.getElementById('menuGame').style = "color: #FFF; background-color: #298EB5;";
}

const menuJukebox = () => {
  document.getElementById('contentFrame').setAttribute('src', 'jukebox.html');
  document.getElementById('menuJukebox').style = "color: #000; background-color: #FFF;";
  document.getElementById('menuHome').style = "color: #FFF; background-color: #298EB5;";
  document.getElementById('menuGame').style = "color: #FFF; background-color: #298EB5;";
}

const menuGame = () => {
  document.getElementById('contentFrame').setAttribute('src', 'game.html');
  document.getElementById('menuGame').style = "color: #000; background-color: #FFF;";
  document.getElementById('menuHome').style = "color: #FFF; background-color: #298EB5;";
  document.getElementById('menuJukebox').style = "color: #FFF; background-color: #298EB5;";
}