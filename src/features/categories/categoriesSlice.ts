/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';

interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
}

const category: Category = {
  id: '808050410a-sass50-asbf-80450451210214asadsd',
  name: 'Sass',
  description: 'uma description',
  is_active: true,
  deleted_at: null,
  created_at: '2021-01-01T00:00:00.000Z',
  updated_at: '2021-01-01T00:00:00.000Z',
};

export const initialState = [
  category,
  {
    ...category,
    id: '808050410a-sass50-asbf-afeafm-123rdfs',
    name: 'Oliveira',
  },
  { ...category, id: '808050410a-sass50-asbf-dsadwdw2421qedsa', name: 'Pires' },
  { ...category, id: 'dwwdasd-fffff-asbf-213542rasdfvq2', name: 'Carolina' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
});

export default categoriesSlice.reducer;
