import Chai from 'chai';
import app from './src/app';

const chai = Chai.expect;

describe("Checks for rainDrop functionality: ", () => {
  describe("Test for Pling", () => {
    it("should return `pling` for 3", () => {
      const value = app.rainDrops(3);
      chai(value).equal('Pling');
    });

    it("should return `Pling` for 9", ()=> {
      const value = app.rainDrops(3);
      chai(value).equal('Pling');
    });

		it("should return `Pling` for 12", ()=> {
      const value = app.rainDrops(12);
      chai(value).equal('Pling');
    });
  });

  describe("Test for a Plong", () => {
		it("should return `Plong` for 7", () => {
      const value = app.rainDrops(7);
      chai(value).equal('Plong');
    });
		it("should return `Plong` for 7", () => {
      const value = app.rainDrops(7);
      chai(value).equal('Plong')
    });
  });

  describe("Test for a PlingPlang", ()=> {
		it("should return a PlingPlang", () => {
      const value = app.rainDrops(15);
      chai(value).equal("PlingPlang");
    });

		it("should return a PlingPlang", () => {
      const value = app.rainDrops(1755);
      chai(value).equal("PlingPlang");
    });

		it("should return a PlingPlang", () => {
      const value = app.rainDrops(30);
      chai(value).equal("PlingPlang");
    });
  });

	describe("Test for a Plang", ()=> {
		it("should return a Plang", () => {
      const value = app.rainDrops(5);
      chai(value).equal("Plang");
    });

		it("should return a Plang", () => {
      const value = app.rainDrops(10);
      chai(value).equal("Plang");
    });

		it("should return a Plang", () => {
      const value = app.rainDrops(40);
      chai(value).equal("Plang");
    });
  });

  describe("Test for an empty input",() => {
    it("should return `Input must be a number` for empty input", () => {
      const value = app.rainDrops();
      chai(value).equal("Input must be a number");
    });
  });
})