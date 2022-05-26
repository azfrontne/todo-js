import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了TODOリストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了TODOリストに追加する関数
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了のTODOから削除
    // divの親要素がliなためdivのparentNodeを指定
    deleteFromIncompleteList(div.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTarget = addTarget.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 完了TODO内のテキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // liタグの子要素にdivを設定
    li.appendChild(addTarget);

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // 完了TODOリストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了のTODOから削除
    // divの親要素がliなためdivのparentNodeを指定
    deleteFromIncompleteList(div.parentNode);
  });

  // liタグの子要素にdivを設定
  li.appendChild(div);
  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了TODOリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
