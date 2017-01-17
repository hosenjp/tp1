/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

@component("test-component")
class TestComponent extends polymer.Base
{
  @property({type : String})
  message:string;

  attached() {
    this.message = "Hello World";
  }
}

// after the element is defined, we register it in Polymer
TestComponent.register();
