import childModel from "../models/childModel.js";

export const registerChild = async (req, res) => {
  const { name, sex, classRoom } = req.body;

  try {
    const saveChild = await childModel.create({
      name,
      sex,
      classRoom,
    });

    return res.status(201).json({ success: true, child: saveChild });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

export const getAllChilds = async (req, res) => {
  await childModel
    .find()
    .then((childs) => {
      res.json({ success: true, registeredChilds: childs });
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
};

export const getChildById = async (req, res) => {
  const childId = req.params.childId;

  await childModel
    .findById(childId)
    .then((child) => {
      res.json({ success: true, childDetails: child });
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
};

export const deleteChildById = async (req, res) => {
  const childId = req.params.childId;
  await childModel
    .findByIdAndDelete(childId)
    .then(() => {
      res.status(201).send({ status: "Child deleted" });
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
};

export const editChildById = async (req, res) => {
  const childId = req.params.childId;
  const { name, sex, classRoom } = req.body;

  const updatedChild = {
    name,
    sex,
    classRoom,
  };

  try {
    await childModel.findByIdAndUpdate(childId, updatedChild).then(() => {
      res.status(200).send({ status: "Children details updated" });
    });
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};
