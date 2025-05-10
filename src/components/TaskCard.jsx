import React from "react";

// TaskCard component that displays task details and allows for editing and deleting tasks
const TaskCard = ({ task, onDelete, onEdit }) => {
  return (
    <div className="p-4 rounded-md shadow-md">
      {" "}
      {/* Container with padding, rounded corners, and shadow */}
      <h3 className="font-bold text-lg dark:text-gray-900">
        {task.title}
      </h3>{" "}
      {/* Task title, styled with bold and large text */}
      <p className="text-gray-900">Due Date: {task.dueDate}</p>{" "}
      {/* Task due date with gray text */}
      <p className="dark:text-gray-900">
        Status:{" "}
        <span
          className={`font-semibold   ${
            // Span for the status, dynamically applying color based on the status
            task.status === "pending"
              ? "text-yellow-500" // Yellow for "pending"
              : task.status === "in-progress"
              ? "text-blue-500" // Blue for "in-progress"
              : "text-green-500" // Green for "completed"
          }`}
        >
          {task.status}
        </span>
      </p>
      <p className="dark:text-gray-900">
        Assigned User: {task.assignedUserId || "Unassigned"}
      </p>{" "}
      {/* Displays assigned user or "Unassigned" if no user is assigned */}
      {/* Conditionally rendering attached files if they exist */}
      {task.files && task.files.length > 0 && (
        <div className="mt-2">
          {/* Section Header for Attached Files */}
          <p className="font-bold dark:text-black">Attached Files:</p>

          {/* Iterating over the files array to display each file */}
          {task.files.map((file, index) => {
            return (
              <div key={index}>
                {/* Check if the file type is an image, and display it accordingly */}
                {file.type.startsWith("image/") ? (
                  <div>
                    <p className="text-blue-500">
                      <a
                        href={file.previewUrl} // Direct link to the image file
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline cursor-pointer"
                      >
                        {file.name} ({file.type}) {/* File name and type */}
                      </a>
                    </p>
                    <img
                      src={file.previewUrl}
                      alt={file.name}
                      className="w-32 h-32 object-cover mt-2" // Displaying the image with set width and height
                    />
                  </div>
                ) : (
                  <p className="text-blue-500">
                    <a
                      href={file.previewUrl} // Direct link for non-image files (e.g., PDFs)
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline cursor-pointer"
                    >
                      {file.name} ({file.type})
                    </a>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
      {/* Edit and Delete Buttons */}
      <div className="mt-4 flex justify-between">
        {" "}
        {/* Flexbox for button alignment */}
        <button
          onClick={() => onEdit(task)} // Trigger edit functionality
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)} // Trigger delete functionality
          className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
