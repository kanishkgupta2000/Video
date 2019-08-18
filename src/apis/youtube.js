import axios from 'axios';
const KEY='AIzaSyCNqMkrPFiTMVZgBwO4t5TUdhr60njeGmU';

export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params:{
		part:'snippet',
		maxResults:5,
		key:KEY
	}
})