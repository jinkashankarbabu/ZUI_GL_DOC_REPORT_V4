
sap.ui.define([], function () {
    "use strict";

    return {
        getStatusText: function (sType) {
            console.log("TEXT FORMATTER:", sType);

            switch (sType) {
                case "DZ":
                    return "Customer Payment";
                case "SU":
                    return "Review Posting";
                case "SA":
                    return "GL Posting";
                default:
                    return "AI Review Pending";
            }
        },

        getStatusState: function (sType) {
            console.log("STATE FORMATTER:", sType);

            switch (sType) {
                case "DZ":
                    return "Success";
                case "SU":
                    return "Warning";
                default:
                    return "None";
            }
        }
    };
});
