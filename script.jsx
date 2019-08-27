class TweetCard extends React.Component {
    render() {
        return (
            <div className ="col-6 offset-3">
                <h3>{this.props.screen_name}</h3>
                <div><img src={this.props.img}/></div>
                <div>Tweet: {this.props.text}</div>
                <div> number of followers: {this.props.followers_count}</div>
            </div>
        );
    }
}

class Tweets extends React.Component {
    render() {
        let eachTweet = this.props.items.map( item => {
                              return <TweetCard screen_name ={item.user.screen_name} img = {item.user.profile_image_url} text = {item.text} followers_count={item.user.followers_count} ></TweetCard>
                                     ;
                            });
        return (
          <div className ="row">
            {eachTweet}
          </div>
        );
    }
}



ReactDOM.render(
 <Tweets items = {tweets}/>,
    document.getElementById('allTweet')
);