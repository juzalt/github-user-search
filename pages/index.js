import React from 'react';
import Link from 'next/link';
import ProfileCard from '../components/ProfileCard';

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchedUsers: [{"login": "placeholder"}]
    }
  }
  
  async handleChange(e){
    let searchedString = e.target.value;
    let searchDataStream = await fetch(`https://api.github.com/search/users?q=${searchedString}`)
    let searchResults = await searchDataStream.json()
    console.log(searchResults.items);
    this.setState({
      searchedUsers: searchResults.items
    })
  }

  render(){
    return(
    <div>
      
      <div className='hero'>
        <h1 className='title'>Welcome to GitHub Search Engine!</h1>
          <h3>Search for a GitHub profile &rarr;</h3>
          <form className="searchBar">
          <input 
            className="searchInput" 
            type="text" 
            placeholder="Search for a GitHub profile!"
            onChange={(e) => this.handleChange(e)}
          />
        </form>
          {this.state.searchedUsers.map((user, key) => {
            return(
              <ProfileCard 
                name={user.login}
                key={key}
              />
            )
          })}
        </div>
  
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
    )  
  }
}


export default Home
