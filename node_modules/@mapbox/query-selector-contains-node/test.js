'use strict';

const querySelectorContainsElement = require('./index');

describe('querySelectorContainsElement', () => {
  let container = document.createElement('div');

  beforeAll(() => {
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  test('returns true when element matches selector', () => {
    container.innerHTML = `
      <div id="el" foo></div>
    `;
    const element = document.getElementById('el');
    expect(querySelectorContainsElement('[foo]', element)).toBe(true);
  });

  test('returns true when element is child of element matching selector', () => {
    container.innerHTML = `
      <div foo>
        <div id="el"></div>
      </div>
    `;
    const element = document.getElementById('el');
    expect(querySelectorContainsElement('[foo]', element)).toBe(true);
  });

  test('returns true when element is deeply nested descendent of element matching selector', () => {
    container.innerHTML = `
      <div foo>
        <div>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <div>
                <div id="el"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    const element = document.getElementById('el');
    expect(querySelectorContainsElement('[foo]', element)).toBe(true);
  });

  test('returns true when element is deeply nested descendent of element matching selector', () => {
    container.innerHTML = `
      <div>
        <div>
          <div>
            <div foo></div>
          </div>
        </div>
        <div>
          <div foo>
            <div>
              <div foo>
                <div></div>
              </div>
            </div>
            <div>
              <div>
                <div id="el"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    const element = document.getElementById('el');
    expect(querySelectorContainsElement('[foo]', element)).toBe(true);
  });

  test('returns false when element is peer of element matching selector', () => {
    container.innerHTML = `
      <div foo></div>
      <div id="el"></div>
    `;
    const element = document.getElementById('el');
    expect(querySelectorContainsElement('[foo]', element)).toBe(false);
  });

  test('returns false when no element matches selector', () => {
    container.innerHTML = `
      <div>
        <div id="el"></div>
      </div>
    `;
    const element = document.getElementById('el');
    expect(querySelectorContainsElement('[foo]', element)).toBe(false);
  });

  test('returns false when element is not a child of an element matching selector', () => {
    container.innerHTML = `
      <div>
        <div id="el"></div>
      </div>
      <div foo></div>
    `;
    const element = document.getElementById('el');
    expect(querySelectorContainsElement('[foo]', element)).toBe(false);
  });

  test('returns false in complex setup', () => {
    container.innerHTML = `
        <div>
          <div foo>
            <div>
              <div foo></div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div foo>
                  <div></div>
                </div>
              </div>
              <div>
                <div>
                  <div id="el">
                    <div foo></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    const element = document.getElementById('el');
    expect(querySelectorContainsElement('[foo]', element)).toBe(false);
  });
});
