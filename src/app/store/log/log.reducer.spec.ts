import { ActionLogToggleFilter, LogItemType, logReducer } from './log.reducer';

describe('LogReducer', () => {
  describe('ActionLogInit', () => {
  });
  describe('ActionLogToggleFilter', () => {
    it('should toggle leaf', () => {
      const initialState = {
        items: [],
        filteredItems: [],
        filter: [
          {
            level: 0,
            title: 't1',
            selected: false,
            expandable: true,
            expanded: false,
            visible: true,
            type: LogItemType.response,
          },
          {
            level: 1,
            title: 't2',
            selected: false,
            expandable: false,
            expanded: false,
            visible: true,
            type: LogItemType.response,
          },
          {
            level: 1,
            title: 't3',
            selected: false,
            expandable: false,
            expanded: false,
            visible: true,
            type: LogItemType.response,
          },
        ],
        hasFilter: false,
      };
      const action = new ActionLogToggleFilter(initialState.filter[1]);
      const state = logReducer(initialState, action);
      expect(state).toMatchInlineSnapshot(`
        Object {
          "filter": Array [
            Object {
              "expandable": true,
              "expanded": false,
              "level": 0,
              "selected": null,
              "title": "t1",
              "type": 2,
              "visible": true,
            },
            Object {
              "expandable": false,
              "expanded": false,
              "level": 1,
              "selected": true,
              "title": "t2",
              "type": 2,
              "visible": true,
            },
            Object {
              "expandable": false,
              "expanded": false,
              "level": 1,
              "selected": false,
              "title": "t3",
              "type": 2,
              "visible": true,
            },
          ],
          "filteredItems": Array [],
          "hasFilter": true,
          "items": Array [],
        }
      `);
      const action2 = new ActionLogToggleFilter(initialState.filter[2]);
      const state2 = logReducer(state, action2);
      expect(state2).toMatchInlineSnapshot(`
        Object {
          "filter": Array [
            Object {
              "expandable": true,
              "expanded": false,
              "level": 0,
              "selected": true,
              "title": "t1",
              "type": 2,
              "visible": true,
            },
            Object {
              "expandable": false,
              "expanded": false,
              "level": 1,
              "selected": true,
              "title": "t2",
              "type": 2,
              "visible": true,
            },
            Object {
              "expandable": false,
              "expanded": false,
              "level": 1,
              "selected": true,
              "title": "t3",
              "type": 2,
              "visible": true,
            },
          ],
          "filteredItems": Array [],
          "hasFilter": false,
          "items": Array [],
        }
      `);
    });
  });
});
