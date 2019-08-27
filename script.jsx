class TweetCard extends React.Component {
    render() {
        return (
            <div>
            <div>{this.props.screen_name}</div>
           <div><img src={this.props.img}/></div>
            <div>{this.props.text}</div>
            </div>
        );
    }
}

class Tweets extends React.Component {
    render() {
        let eachTweet = this.props.items.map( item => {
                              return <TweetCard screen_name ={item.user.screen_name} img = {item.user.profile_image_url} text = {item.text} ></TweetCard>
                                     ;
                            });
        return (
          <div>
            {eachTweet}
          </div>
        );
    }
}



ReactDOM.render(
 <Tweets items = {tweets}/>,
    document.getElementById('allTweet')
);