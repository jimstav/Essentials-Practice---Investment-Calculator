import React from 'react';

interface UserInputProps {
  initialInvestment?: number;
  annualInvestment?: number;
  expectedReturn?: number;
  duration?: number;
  onInitialInvestmentChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAnnualInvestmentChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpectedReturnChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDurationChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  onInitialInvestmentChanged,
  onAnnualInvestmentChanged,
  onExpectedReturnChanged,
  onDurationChanged,
}: UserInputProps) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={onInitialInvestmentChanged}
              required
            />
          </p>
        </div>
        <div>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={annualInvestment}
              onChange={onAnnualInvestmentChanged}
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
              value={expectedReturn}
              onChange={onExpectedReturnChanged}
              required
            />
          </p>
        </div>
        <div>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={duration}
              min={1}
              onChange={onDurationChanged}
              required
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserInput;
