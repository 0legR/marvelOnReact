import React from 'react';
import Article from '../article/index.js';

export const my_comments = [
	{
		first: 'it`s a history of kung-fu',
		second: 'lee the best',
		third: 'Chein is a city boy who moves with his cousins to work at a ice factory. He does this with a family promise never to get involved in any fight. However, when members of his family begin disappearing after meeting the management of the factor, the resulting mystery and pressures forces him to break that vow and take on the villainy of the Big Boss.'
	},
	{
		first: 'it`s a story about sins',
		second: 'al Pachino is great',
		third: 'Kevin Lomax, a ruthless young Florida attorney that never lost a case, is recruited by the most powerful law firm in the world. In spite of his mother`s disagreement, which compares New York City to Babylon, he accepts the offer and the money that comes along. But soon, his wife starts feeling homesick as she witnesses devilish apparitions. However, Kevin is sinking in his new cases and pays less and less attention to his wife. His boss and mentor, John Milton, seems to always know how to overcome every problem and that just freaks Kevin right off.'
	},
	{
		first: 'this movie has four parts',
		second: 'willis the last boyscaut',
		third: 'NYPD cop John McClane goes on a Christmas vacation to visit his wife Holly in Los Angeles where she works for the Nakatomi Corporation. While they are at the Nakatomi headquarters for a Christmas party, a group of bank robbers led by Hans Gruber take control of the building and hold everyone hostage, with the exception of John, while they plan to perform a lucrative heist. Unable to escape and with no immediate police response, John is forced to take matters into his own hands.'
	}
];

class Comments extends React.Component {
	render(){
		let data = this.props.commentsData;
		let commentsTemplate = data.length ? data.map(function(item, index){
			return (
				<div key={index}>
					<Article data={item} />
					{/* <p className="news_author">{item.first}!</p>*/}
					{/* <p className="news_text">{item.second}</p>*/}
				</div>
			);
		}) : (<p>No comments</p>);

		return (
			<div className="comments">
				{commentsTemplate}
				<strong>Total comments => {data.length}</strong>
			</div>
		);
	}
}

export default Comments;