<script>
  // @ts-nocheck

  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardFooter from "sveltestrap/src/CardFooter.svelte";
  import Form from "sveltestrap/src/Form.svelte";
  import FormGroup from "sveltestrap/src/FormGroup.svelte";
  import Label from "sveltestrap/src/Label.svelte";
  import Input from "sveltestrap/src/Input.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  import Col from "sveltestrap/src/Col.svelte";
</script>

<Col class="col-lg-7 mx-auto">
  <Card class="shadow-lg border-0 rounded-lg mt-5">
    <CardHeader>
      <h3 class="text-center font-weight-light my-4">Register</h3>
    </CardHeader>
    <CardBody>
      <Form action="" method="POST">
        <FormGroup>
          <Label for="inputName" class="small mb-1">Nama</Label>
          <Input
            class="py-4"
            type="text"
            name="nama"
            id="inputName"
            placeholder="Enter nama"
          />
        </FormGroup>
        <FormGroup>
          <Label for="username" class="small mb-1">Username</Label>
          <Input
            class="py-4"
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="inputPassword" class="small mb-1">Password</Label>
          <Input
            class="py-4"
            type="password"
            name="password"
            id="inputPassword"
            placeholder="Enter password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="telepon" class="small mb-1">Telepon</Label>
          <Input
            class="py-4"
            type="number"
            name="telepon"
            id="telepon"
            placeholder="Enter telepon"
          />
        </FormGroup>
        <FormGroup>
          <Label for="nik" class="small mb-1">Nik</Label>
          <Input
            class="py-4"
            type="number"
            name="nik"
            id="nik"
            placeholder="Enter nik"
          />
        </FormGroup>
        <FormGroup class="mt-4 mb-0">
          <Button color="primary" type="submit" block>
            Create Account
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
    <CardFooter class="text-center small">
      <a href="/login">Have an account? Go to login</a>
    </CardFooter>
  </Card>
</Col>
<div class="pb-5" />
