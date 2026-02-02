'use server';

import { revalidatePath } from 'next/cache';
import clientPromise from '@/lib/mongodb';
import { Product, Category, Customer } from '@/lib/data';
import { ObjectId } from 'mongodb';

async function getDb() {
  const client = await clientPromise;
  return client.db();
}

// Helper to convert MongoDB ObjectId to string
const fromMongo = <T extends { _id: ObjectId }>(doc: T): Omit<T, '_id'> & { id: string } => {
    const { _id, ...reST } = doc;
    return { id: _id.toHexString(), ...reST };
};

// Product Actions
export async function getProducts() {
  const db = await getDb();
  const products = await db.collection<Product>('products').find().sort({ name: 1 }).toArray();
  return products.map(fromMongo);
}

export async function addProduct(product: Omit<Product, 'id'>) {
  const db = await getDb();
  const result = await db.collection('products').insertOne(product);
  revalidatePath('/admin/products');
  revalidatePath('/');
  return fromMongo({ ...product, _id: result.insertedId });
}

export async function updateProduct(product: Product) {
  const db = await getDb();
  const { id, ...productData } = product;
  await db.collection('products').updateOne({ _id: new ObjectId(id) }, { $set: productData });
  revalidatePath('/admin/products');
  revalidatePath('/');
}

export async function deleteProduct(productId: string) {
  const db = await getDb();
  await db.collection('products').deleteOne({ _id: new ObjectId(productId) });
  revalidatePath('/admin/products');
  revalidatePath('/');
}


// Category Actions
export async function getCategories() {
    const db = await getDb();
    const categories = await db.collection<Category>('categories').find().sort({ 'name.en': 1 }).toArray();
    return categories.map(fromMongo);
}
  
export async function addCategory(category: Omit<Category, 'id'>) {
    const db = await getDb();
    const result = await db.collection('categories').insertOne(category);
    revalidatePath('/admin/categories');
    return fromMongo({ ...category, _id: result.insertedId });
}

export async function updateCategory(category: Category) {
    const db = await getDb();
    const { id, ...categoryData } = category;
    await db.collection('categories').updateOne({ _id: new ObjectId(id) }, { $set: categoryData });
    revalidatePath('/admin/categories');
}

export async function deleteCategory(categoryId: string) {
    const db = await getDb();
    // In a real app, you might want to handle products in this category.
    // For now, we just delete the category.
    await db.collection('categories').deleteOne({ _id: new ObjectId(categoryId) });
    await db.collection('products').updateMany({ categoryId: categoryId }, { $set: { categoryId: 'uncategorized' } });
    revalidatePath('/admin/categories');
    revalidatePath('/admin/products');
    revalidatePath('/');
}


// Customer Actions
export async function getCustomers() {
    const db = await getDb();
    const customers = await db.collection<Customer>('customers').find().sort({ name: 1 }).toArray();
    return customers.map(fromMongo);
}

export async function addCustomer(customer: Omit<Customer, 'id'>) {
    const db = await getDb();
    const result = await db.collection('customers').insertOne(customer);
    revalidatePath('/admin/customers');
    return fromMongo({ ...customer, _id: result.insertedId });
}

export async function updateCustomer(customer: Customer) {
    const db = await getDb();
    const { id, ...customerData } = customer;
    await db.collection('customers').updateOne({ _id: new ObjectId(id) }, { $set: customerData });
    revalidatePath('/admin/customers');
}

export async function deleteCustomer(customerId: string) {
    const db = await getDb();
    await db.collection('customers').deleteOne({ _id: new ObjectId(customerId) });
    revalidatePath('/admin/customers');
}
