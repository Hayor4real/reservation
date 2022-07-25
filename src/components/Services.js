import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: 'A cocktail is an alcoholic mixed drink. Most commonly, cocktails are either a combination of spirits, or one or more spirits mixed with other ingredients such as tonic water, fruit juice, flavored syrup, or cream. Cocktails vary widely across regions of the world',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: `This is the perfect base for hiking, white-water rafting and fly-fishing.
          Also included in the price of the holiday are two days hiking in the High Atlas mountains.
          some harder, more strenuous hiking on cliff pathways`,
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Hop on our Free Shuttle from select locations in downtown Vancouver. Proof of park admission is required for return service on the shuttle.?',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: 'There’s nothing more refreshing than cracking open a cold beer on a hot summer afternoon',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
