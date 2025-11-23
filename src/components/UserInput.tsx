import React, { useState } from 'react';
import { UserInputArgs } from '../util/investment';

interface UserInputProps {
  onChange: (inputIdentifier: string, newValue: number) => void;
  userInput: UserInputArgs;
}

const UserInput = ({ onChange, userInput }: UserInputProps) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(e) =>
                onChange('initialInvestment', parseInt(e.target.value))
              }
              required
            />
          </p>
        </div>
        <div>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={userInput.annualInvestment}
              onChange={(e) =>
                onChange('annualInvestment', parseInt(e.target.value))
              }
              required
            />
          </p>
        </div>
      </div>
      <div className="input-group">
        <div>
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              step=".01"
              value={userInput.expectedReturn}
              onChange={(e) =>
                onChange('expectedReturn', parseFloat(e.target.value))
              }
              required
            />
          </p>
        </div>
        <div>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={userInput.duration}
              min={1}
              onChange={(e) => onChange('duration', parseInt(e.target.value))}
              required
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserInput;
