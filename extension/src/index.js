import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import Sandboxes from './sandboxes/Sandboxes';


$(() => {
  const button = $(' \
    <button \
      id="sandbox_toggle" \
      class="channel_header_icon btn_unstyle ts_tip ts_tip_bottom "> \
      <span class="ts_tip_tip">Show Sandboxes</span> \
      <ts-icon class="ts_icon_laptop" aria-hidden="true"></ts-icon> \
    </button>');

  /*append button*/
  $('.channel_header .flex_header').prepend(button);
  /*Create pannel*/
  $('#flex_contents').append('<div class="panel" id="sandboxes_tab"></div>');

  /*add click button*/
  button.click(() => {
    $('#client-ui').toggleClass('flex_pane_showing');
    $('#flex_contents .panel').removeClass('active');
    $('#sandboxes_tab').toggleClass('active');
  });

  /* Init react items */
  render(<Sandboxes source="https://3d4b7055.ngrok.io/sandboxes/"/>, document.querySelector('#sandboxes_tab'));

});
