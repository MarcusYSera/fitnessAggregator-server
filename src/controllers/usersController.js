import Model from '../models/model';

import { testEnvironmentVariable } from '../config';

const userModel = new Model('users');

export const indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });

export const addUser = async (req, res) => {
  console.log(req);
  const { stravaId, refreshToken } = req.body;
  const columns = 'stravaid, refreshtoken';
  const values = `'${stravaId}', '${refreshToken}'`;
  try {
    const data = await userModel.insertWithReturn(columns, values);
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(200).json({ users: err.stack });
  }
};
