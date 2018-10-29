class AvaFieldMapper {
  /**
   * 
   * @param {*} mapperId 
   * @param {*} inputJSON 
   */
  constructor(mapperId, inputJSON) {
      this.mapperId = mapperId;
      this.inputJSON = inputJSON;
      this.maxFieldWidth = 0;
      this.sourceGroupHeight = 0;
      this.targetGroupHeight = 0;
      this.currentSourceNode;
      this.currentTargetNode;
  }

  getSourceNode() {
    return this.currentSourceNode;
  }

  setSourceNode(node) {
    this.currentSourceNode = node;
  }

  getTargetNode() {
    return this.currentTargetNode;
  }

  setTargetNode(node) {
    this.currentTargetNode = node;
  }

  /**
   * 
   */
  initSvg() {
    let _this = this;
    let draw = new SVG(_this.mapperId);
    let nested = draw.nested().addClass('key');
    _this.maxFieldWidth = _this.findFieldsMaxWidth(_this.inputJSON.nodeDataArray);
    let sourceData = _this.inputJSON.nodeDataArray[0];
    let targetData = _this.inputJSON.nodeDataArray[1];
    let targetGroup = _this.createFieldsGroup(nested, targetData.key, targetData.fields, 'target');
    let sourceGroup = _this.createFieldsGroup(nested, sourceData.key, sourceData.fields, 'source');

    let drawHeight = (_this.targetGroupHeight > _this.sourceGroupHeight? _this.targetGroupHeight : _this.sourceGroupHeight) + 30;
    
    targetGroup.rect(_this.maxFieldWidth + 30, drawHeight).attr({
      x: 2,
      y: 2,
      fill: '#fff',
      stroke: '#059bd2',
      'stroke-width': 2,
    }).back();

    sourceGroup.rect(_this.maxFieldWidth + 30, drawHeight).attr({
      x: 2,
      y: 2,
      fill: '#fff',
      stroke: '#059bd2',
      'stroke-width': 2,
    }).back();

    targetGroup.x(_this.maxFieldWidth + 150);
    draw.height(drawHeight + 4);

    _this.drawConnectors(sourceGroup, targetGroup, _this.inputJSON.linkDataArray);
  }

  /**
   * 
   * @param {*} nodeDataArray 
   */
  findFieldsMaxWidth(nodeDataArray = []) {
    let maxWidth = nodeDataArray[0].fields && nodeDataArray[0].fields[0].name.length;
    nodeDataArray.forEach((nodes) => {
      nodes.fields.forEach((field) => {
        if (maxWidth < field.name.length) {
          maxWidth = field.name.length;
        }
      });
    });
  
    return maxWidth * 10;
  }

  /**
   * 
   * @param {*} nested 
   * @param {*} key 
   * @param {*} fieldSet 
   * @param {*} type 
   */
  createFieldsGroup(nested, key, fieldSet, type) {
    var group = nested.group().attr({class: key});
    var x = 2, y = -5;

    this.drawFieldNode(group, key, key, x, y, 'header');
    y = 45;
    this.drawFieldNode(group, key, '+ ADD NEW', x, y, 'button');
  
    fieldSet.forEach((field) => {
      y += 47;
      
      this.targetGroupHeight +=35;

      this.drawFieldNode(group, key, field.name, x, y, type);
    });
  
    return group;
  }

  /**
   * 
   * @param {*} parent 
   * @param {*} key 
   * @param {*} fieldName 
   * @param {*} x 
   * @param {*} y 
   * @param {*} type 
   */
  drawFieldNode(parent, key, fieldName, x, y, type) {
    let nodeId = fieldName + '_' + type;
    let fieldGroup = parent.group().attr({class: nodeId}).style('cursor:pointer;fill:#f03;');
    let rectWidth = type === 'header'? this.maxFieldWidth + 30 : this.maxFieldWidth;
    let rectX = type === 'header'? 2 : 15;
    let rect = fieldGroup.rect(rectWidth, 30);
    
    rect.attr({
      class: 'source-node',
      fill: type === 'source' ? '#e4eff6' : type === 'target'? '#ff6600' : '#059bd2',
      x: rectX,
      y: y
    });
  
    fieldGroup.id();
    fieldGroup.data({
      name: fieldName,
      key: key,
      class: nodeId
    });
    let text = fieldGroup.text(fieldName);
    text.attr({
      fill: type === 'source' ? '#5f6062' : '#fff',
      family: 'sans-serif',
      x: (rect.attr('x') + rect.attr('width') / 2 - text.length() / 2),
      y: rect.y()
    });
    
    let _this = this;
    
    if (type === 'source') {
      fieldGroup.on('click', function (e) {
        _this.setSourceNode(e.currentTarget.instance);
        _this.setTargetNode(undefined);
        _this.toggleNodeSelection(fieldGroup);
      });
    }
  
    if (type === 'target') {
      fieldGroup.on('click', function(e) {
        _this.setTargetNode(e.currentTarget.instance);
        if (!_this.getSourceNode()) {
          return;
        }
        _this.toggleNodeSelection(_this.getSourceNode());
        _this.createConnector(fieldGroup, _this.getSourceNode(), _this.getTargetNode());
        _this.setSourceNode(undefined);
      });
    }
  }

  /**
   * 
   * @param {*} parent 
   */
  toggleNodeSelection(parent) {
    this.resetAllNodeSelection(parent)
    var selectedNode = parent.select('rect');
    selectedNode.toggleClass('select-node');
  }

  /**
   * 
   * @param {*} parent 
   */
  resetAllNodeSelection(parent) {
    var nodes = parent.parent().select('rect.source-node');
    nodes.each(function() {
      if (this.parent().id() !== parent.id()) {
        this.removeClass('select-node');
      }
    });
  }

  /**
   * 
   * @param {*} parent 
   * @param {*} source 
   * @param {*} target 
   */
  createConnector(parent, source, target) {
    var grandParent = parent.parent().parent();
    var sourceId = source.data('class');
    var targetId = target.data('class');
    var sourceRectNode = source.select('rect').members[0];
    var targetRectNode = target.select('rect').members[0];
    var x1 = source.cx() + sourceRectNode.width()/2;
    var y1 = source.cy();
    var x2 = target.parent().x() + target.cx() - targetRectNode.width()/2;
    var y2 = target.parent().y() + target.cy();
    var previousConnector = grandParent.select('line.'+source.data('name') + '_line');
    var connector;
    if (previousConnector.length()) {
      connector = grandParent.line(x1, y1, x2, y2).stroke({ width: 3, color: '#72767e' }).attr({class: source.data('name') + '_line'});
      previousConnector.replace(connector);
    } else {
      connector = grandParent.line(x1, y1, x2, y2).stroke({ width: 3, color: '#72767e' }).attr({class: source.data('name') + '_line'});
    }

    var marker = grandParent.marker();
        marker.attr({
            viewBox:'0 -5 10 10',
            markerWidth: 15,
            markerHeight: 15,
            refX: 2,
            refY: 2,
            orient: 'auto'
        });
      var arrowhead = grandParent.path(
        'M0,0 V4 L2,2 Z'
      ).fill('#059bd2');
      marker.add(arrowhead);
      connector.marker('end', marker);

    this.updateLinkData(source, target);
  }

  /**
   * 
   * @param {*} source 
   * @param {*} target 
   */
  updateLinkData(source, target) {
    // linkDataArray: [
    //   { from: "Record1", fromPort: "field1", to: "Record2", toPort: "fieldA" }
    // ]
    var inputLinkDataArray = this.inputJSON.linkDataArray || [];
    var currentNodeLinkIndex = inputLinkDataArray.findIndex((node, index) => {
      if (node.from === source.data('name')) {
        return true;
      }
      return false;
    });
  
    var nodeLinkData = {
      from: source.data('key'), 
      fromPort: source.data('name'),
      to: target.data('key'),
      toPort: target.data('name')  
    }
  
    if (currentNodeLinkIndex > -1) {
      inputLinkDataArray[currentNodeLinkIndex] = nodeLinkData;
    } else {
      inputLinkDataArray.push(nodeLinkData);
    }
  
    document.getElementById('av-mapper-output').value = JSON.stringify(this.inputJSON);
  }

  /**
   * 
   * @param {*} sourceGroup 
   * @param {*} targetGroup 
   * @param {*} nodeLinkData 
   */
  drawConnectors(sourceGroup, targetGroup, nodeLinkData = []) {
    nodeLinkData.forEach((link) => {
      var sourceId = link.fromPort;
      var targetId = link.toPort;
      var sourceField = sourceGroup.select('g.' + link.fromPort + '_source').members[0];
      var targetField = targetGroup.select('g.' + link.toPort + '_target').members[0];
      if (sourceField && targetField) {
        var sourceRectNode = sourceField.select('rect').members[0];
        var targetRectNode = sourceField.select('rect').members[0];
        var x1 = sourceField.cx() + sourceRectNode.width()/2;
        var y1 = sourceField.cy();
        var x2 = targetField.parent().x() + targetField.cx() - targetRectNode.width()/2;
        var y2 = targetField.parent().y() + targetField.cy();
    
        var connector = sourceGroup.parent().line(x1, y1, x2, y2).stroke({ width: 3, color: '#72767e' }).attr({class: sourceId + '_line'});

        var marker = sourceGroup.parent().marker(); // or draw.defs().marker()
        marker.attr({
            viewBox:'0 -5 10 10',
            markerWidth: 15,
            markerHeight: 15,
            refX: 2,
            refY: 2,
            orient: 'auto'
        });
      var arrowhead = sourceGroup.parent().path(
        'M0,0 V4 L2,2 Z'
      ).fill('#059bd2');
      marker.add(arrowhead);
      connector.marker('end', marker);
      }
    });
  }
}
