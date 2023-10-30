import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: { value: [] },
  reducers: {
    getOrders: (state, action) => {
      const theData = action.payload;
      const mons = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let months = [
        { month: "Jan", uv: 0 },
        { month: "Feb", uv: 0 },
        { month: "Mar", uv: 0 },
        { month: "Apr", uv: 0 },

        { month: "May", uv: 0 },
        { month: "Jun", uv: 0 },
        { month: "Jul", uv: 0 },
        { month: "Aug", uv: 0 },

        { month: "Sep", uv: 0 },
        { month: "Oct", uv: 0 },
        { month: "Nov", uv: 0 },
        { month: "Dec", uv: 0 },
      ];

      theData.map((orders) => {
        const d = new Date(orders.date);
        const date = d.getMonth();
        const theMonth = mons[date];

        for (let i = 0; i < months.length; i++) {
          if (theMonth === months[i].month) {
            months[i].uv = months[i].uv + 1;
          }
        }
      });

      // months.map((orders) => {
      //   state.value.push(orders.orders);
      // });

      state.value.push(months);
    },
    getOrderstwo: (state, action) => {},
    deleteOrders: (state, action) => {
      state.value = [];
    },
  },
});

export const { getOrders, deleteOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
