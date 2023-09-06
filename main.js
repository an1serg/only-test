const wrapper = document.getElementById('wrapper');

const buttonsContent = {
  bridge: '-  Мост',
  parking: '-  Парковка',
  stadium: '-  Стадион',
  column: '-  Колонна',
  hotel: '-  Отель',
  museum: '-  Музей',
  appsLeft: '-  Левые аппартаменты',
  residentalArea: '-  Жилой квартал',
  canteen: '-  Столовая',
  appsRight: 'Правые аппартаменты  -',
};

const handleClick = (event) => {
  if (!event.target.className.split(' ').includes('opened')) {
    event.target.innerHTML = buttonsContent[event.target.id];
    event.target.classList.add('opened');
  } else {
    event.target.innerHTML = '+';
    event.target.classList.remove('opened');
  }
};

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  handleClick(event);
});
