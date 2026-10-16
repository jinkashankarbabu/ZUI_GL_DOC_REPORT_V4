sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/zfi/gl/zuigldocreportv4/test/integration/pages/HeadersList.gen",
	"com/zfi/gl/zuigldocreportv4/test/integration/pages/HeadersObjectPage.gen",
	"com/zfi/gl/zuigldocreportv4/test/integration/pages/ItemsObjectPage.gen"
], function (JourneyRunner, HeadersListGenerated, HeadersObjectPageGenerated, ItemsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/zfi/gl/zuigldocreportv4') + '/test/flpSandbox.html#comzfiglzuigldocreportv4-tile',
        pages: {
			onTheHeadersListGenerated: HeadersListGenerated,
			onTheHeadersObjectPageGenerated: HeadersObjectPageGenerated,
			onTheItemsObjectPageGenerated: ItemsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

