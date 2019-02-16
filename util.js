let _id = 0;

function getUniqueId(preface) {
    return preface ? `${preface}-${++_id}` : ++_id;
}

function withIds(list) {
    return list.map(item => ({...item, id: getUniqueId()}));
}