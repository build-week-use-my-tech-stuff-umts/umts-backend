import sinon from 'sinon';
import { addNewItem, getAllItems, getRentItemById } from '../../controllers/rentItem';

describe('Mock Rent Item Endpoints', () => {
  it("should respond with status code 500 if there's internal server error", async () => {
    const req = { body: {} };
    const res = {
      status() {},
      send() {},
    };
    sinon.stub(res, 'status').returnsThis();
    const next = sinon.spy();
    await addNewItem(req, res, next);
    sinon.assert.calledOnce(next);
  });
  it('throw 500 internal server error', async () => {
    const req = { body: {} };
    const res = {
      status() {},
      send() {},
    };
    sinon.stub(res, 'status').returnsThis();
    const next = sinon.spy();
    await getAllItems(req, res, next);
    sinon.assert.calledOnce(next);
  });
  it('throw 500 internal server error', async () => {
    const req = { body: {}, params: { itemId: 1 } };
    const res = {
      status() {},
      send() {},
    };
    sinon.stub(res, 'status').returnsThis();
    const next = sinon.spy();
    await getRentItemById(req, res, next);
    sinon.assert.calledOnce(next);
  });
});
