export const payments = {
    data:function() {
        return {
            parent: "",
            data: {},
            loader: 1
        }
    },
    mounted:function() {
        this.parent = this.$parent.$parent;

        if (!this.parent.user) {
            this.parent.logout();
        }

        this.get();
    },
    methods: {
        get:function() {
            var self = this;
            var data = self.parent.toFormData(self.parent.formData);

            data.append('id', this.parent.user.id);

            self.loader = 1;

            axios.post(this.parent.url + "/site/getPayments?auth=" + this.parent.user.auth, data).then(function(response) {
                self.loader = 0;
                self.data = response.data;
            }).catch(function(error) {
                self.parent.logout();
            });
        },
    },
    template: `
        <div class="inside-content">
            <Header ref="header" />
            <div id="spinner" v-if="loader"></div>
            <div class="wrapper">
                <div class="camp-flex">
                    <div class="w30 ptb20 panel">
                        <h2>Payments</h2>
                    </div>
                    <div class="w50 panel"></div>
                    <div class="w20 panel"></div>
                </div>

                
                <div class="table-container">
                    <div class="table payments-table" v-if="data.items != ''">
                        <table>
                            <thead>
                                <tr>
                                    <th class="id">#</th>
                                    <th class="id">Value</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in data.items">
                                    <td class="id">{{item.id}}</td>
                                    <td class="id">
                                        <a href="#" @click.prevent="parent.formData = item; $refs.payment.active = 1;">
                                            {{item.value}}
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" @click.prevent="parent.formData = item; $refs.payment.active = 1;">
                                            {{item.date_title}}
                                        </a>
                                    </td>
                                    <td>
                                        {{item.description}}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="empty" v-if="data.items == ''">
                        No items
                    </div>
                </div>
            </div>
        </div>  
    `
};