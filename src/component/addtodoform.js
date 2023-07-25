export function Todoform() {
  return (
    <div class="mt-4">
      <form class="d-flex justify-content-between align-items-center">
        <input
          type="text"
          class="form-control"
          placeholder="Add new item..."
          required
        />
        <button class="btn btn-primary btn-sm rounded ms-2">Add</button>
      </form>
    </div>
  );
}
