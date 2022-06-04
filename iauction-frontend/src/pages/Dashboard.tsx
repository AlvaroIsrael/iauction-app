import React, { useState, FormEvent } from 'react';
import { FiTag } from 'react-icons/fi';
import api from '../services/api';
import { v4 } from 'uuid';

import { Title, Form, Auctions, Error } from './styles';

interface Auction {
  id: string;
  bid: number;
  auctionItemId: string;
  auctionItemName?: string;
  bidderId: string;
  biddersName?: string;
}

const Dashboard: React.FC = () => {
    const [inputError, setInputError] = useState('');
    const [bidder, setBidder] = useState('');
    const [auctions, setAuctions] = useState<Auction[]>([]);

    async function handleAuctionsSearch(e: FormEvent<HTMLFormElement>): Promise<void> {
      e.preventDefault();

      try {
        setAuctions([]);
        let response;

        if (!bidder) {
          response = await api.get(`auctions`);
        } else {
          response = await api.get(`auctions/?name=${bidder}`);
        }

        const auction = response.data;

        setAuctions([...auction]);
        setBidder('');
        setInputError('');
      } catch (err) {
        setInputError('Could not get any auctions for the given bidder.');
      }
    }

    return (
      <>
        <Title>Auction's House</Title>
        <Form onSubmit={handleAuctionsSearch}>
          <input
            value={bidder}
            onChange={e => setBidder(e.target.value)}
            type='text' placeholder={'Enter bidder\'s name:'} />
          <button type={'submit'}>Pesquisar</button>
        </Form>

        {inputError && <Error>{inputError}</Error>}
        {
          inputError ? null :
            <Auctions>
              {
                auctions.map(a => {
                  return (
                    <button key={v4()}>
                      <span><FiTag key={v4()} size={20} /></span>
                      <div key={v4()}>
                        <strong>{a.auctionItemName}</strong>
                        <p>{a.bid}</p>
                        <p>{a.biddersName}</p>
                      </div>
                    </button>);
                })
              }
            </Auctions>
        }
      </>
    );
  }
;

export default Dashboard;
