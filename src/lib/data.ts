export const links = [
	{
		name: 'Strona główna',
		hash: '/',
	},
	{
		name: 'portfolio',
		hash: '/portfolio',
	},
	{
		name: 'uslugi',
		hash: '/uslugi',
	},
	{
		name: 'O nas',
		hash: '/o-nas',
	},
	{
		name: 'Kontakt',
		hash: '/kontakt',
	},
] as const;

export const standarts = [
	{
		name: 'Wygodne zarządzania stroną',
		imageSrc: '/standards1.PNG',
		text: '	Jeśli mówimy o stronach korporacyjnych, blogach lub	wizytówkach, popularnym wyborem jest platforma WordPress. Jeżeli Twoją branżą jest sprzedaż, to można również rozważyć dodanie WooCommerce. WordPress to panel do zarządzania treścią (CMS), który umożliwia swobodną edycję zawartości na każdej podstronie. Dzięki niemu jesteś w stanie samodzielnie	aktualizować dane kontaktowe, dodawać nowe zdjęcia oraz produkty.',
	},
	{
		name: 'Responsywność',
		imageSrc: '/standards2.PNG',
		text: 'RWD, czyli Responsive Web Design (responsywność projektowania stron internetowych), to podejście projektowe, które ma na celu dostosowanie strony internetowej do różnych rozmiarów ekranów i urządzeń, takich jak komputery stacjonarne, laptopy, tablety i smartfony.',
	},
	{
		name: 'Optymalizacja',
		imageSrc: '/standards3.PNG',
		text: '60% użytkowników rezygnuje z korzystania z Twojej strony, jeśli jej wczytywanie zajmuje więcej niż 1 sekundę. Dlatego dokładnie analizujemy i optymalizujemy wszystkie aspekty, w tym usuwamy zbędne skrypty oraz dostosowujemy obrazki, aby zapewnić, że Twoja strona działa z maksymalną prędkością. Naszym celem jest zapewnienie błyskawicznej reakcji strony na potrzeby użytkowników.',
	},
	{
		name: 'Kopie zapasowe i zabezpieczenia',
		imageSrc: '/standards4.PNG',
		text: 'Przy oddawaniu strony będziemy korzystać z najnowszych i najstabilniejszych wersji oprogramowania. Dodatkowo, zainstalujemy oprogramowanie antyspamowe oraz certyfikat SSL, co zapewni wyższy poziom bezpieczeństwa. Natychmiast po wdrożeniu strony przeprowadzimy pełną kopię zapasową i przechowamy ją przez okres 12 miesięcy, aby zapewnić ochronę danych.',
	},
];

export const portfolio = [
	{
		title: 'WickerLand',
		img: '/image/WickerLand.PNG',
		text: 'Sklep z wyrobami z wikliny.',
		page: 'https://wik-land-front.vercel.app/',
	},
	{
		title: 'CaRent',
		img: '/image/CaRent.PNG',
		text: 'Wpożyczalnia luksusowaych samochodów.',
		page: 'https://carent-jade.vercel.app/',
	},
	{
		title: 'GymApp',
		img: '/image/GymApp.PNG',
		text: 'Aplikacja do zarządzania treningiem',
		page: 'https://gym-app-pi-three.vercel.app/',
	},
];
